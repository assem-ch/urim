import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedInputStream;
import java.util.ArrayList;

public class StemmerTestBuilder {

	/**
	 * @param args
	 */

	static String[] algoritms = { "danish", "dutch", "english", "finnish",
			"french", "german", "hungarian", "italian", "norwegian",
			"portuguese", "russian", "spanish", "swedish", "romanian", 
			"turkish"  };

	public static void main(String[] args) {
		try {

			for (String algoritm : algoritms) {
				int count = 0;
				int gCount = 0;
				StringBuffer gBuffer = new StringBuffer();
				StringBuffer buffer = new StringBuffer("var " + algoritm
						+ "TestDiffs" + gCount + " = {\n");
				boolean isFirst = true;

				ArrayList<String> pairsArray = createTest(algoritm);
				System.out.println(algoritm + "\t[" + pairsArray.size() + "]");

				for (String line : pairsArray) {
					count++;
					if (!isFirst)
						buffer.append(",\n");
					isFirst = false;

					buffer.append("\t" + line);

					if (count >= 250) {
						count = 0;
						isFirst = true;
						buffer.append("\n};");
						gBuffer.append(buffer);
						gCount++;

						gBuffer.append("\n\n");
						buffer = new StringBuffer("var " + algoritm
								+ "TestDiffs" + gCount + " = {\n");

					}
				}

				buffer.append("\n};");
				gBuffer.append(buffer);
				gBuffer.append("\n");

				for (int i = gCount; i >= 0; i--) {
					gBuffer.append("\n");
					gBuffer.append("var test" + algoritm + i
							+ " = function() {\n");
					gBuffer.append("\tvar buffer, fails = 0, total = 0;\n");
					gBuffer.append("\tfor (var sVoc in " + algoritm
							+ "TestDiffs" + i + ") {\n");
					gBuffer.append("\t\ttotal++;\n");
					gBuffer.append("\t\tvar base = " + algoritm + "TestDiffs"
							+ i + "[sVoc];\n");
					gBuffer.append("\t\tvar stem = stemmer(sVoc);\n");
					gBuffer.append("\t\tif (base != stem) {\n");
					gBuffer.append("\t\t\tfails++;\n");
					gBuffer.append("\t\t\tif (buffer) {\n");
					gBuffer.append("\t\t\t\tbuffer += \"; \";\n");
					gBuffer
							.append("\t\t\t\tbuffer += sVoc + \" --> \" + base + \" | \" + stem;\n");
					gBuffer.append("\t\t} else\n");
					gBuffer
							.append("\t\t\t\tbuffer = sVoc + \" --> \" + base + \" | \" + stem;\n");
					gBuffer.append("\t\t}\n");
					gBuffer.append("\t}\n");
					gBuffer
							.append("\tassertUndefined(\"Total:\" + total + \", fails: \" + fails, buffer);\n");
					gBuffer.append("}\n");
				}

				File file = new File("test" + algoritmToHuman(algoritm) + "Stemmer.js");
				FileOutputStream fos = new FileOutputStream(file);
				fos.write(readLicense());
				fos.write(gBuffer.toString().getBytes("UTF-8"));
				fos.flush();
				fos.close();
			}
		} catch (Exception ex) {
			System.out.println(ex);
		}
	}

	private static String algoritmToHuman(String a){
		return a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase();
	}

	private static byte[] readLicense() throws IOException {
		final File file = new File("data/license.txt");
		final BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file));
		final byte[] bytes = new byte[(int)file.length()];
		bis.read(bytes);
		bis.close();

		return bytes;
	}

	private static ArrayList<String> createTest(String algoritm)
			throws IOException {

		BufferedReader voc = new BufferedReader(new InputStreamReader(
				new FileInputStream("data/" + algoritm + "/voc.txt"), "UTF-8"));
		BufferedReader out = new BufferedReader(new InputStreamReader(
				new FileInputStream("data/" + algoritm + "/output.txt"), "UTF-8"));

		ArrayList<String> stemList = new ArrayList<String>();

		String line = null, lineOut = null;
		while ((line = voc.readLine()) != null) {
			if (lineOut == null)
				lineOut = out.readLine();

			if (line.isEmpty()){
				if (lineOut.isEmpty())
					lineOut = null;
				continue;
			}

			if (lineOut == null){
				System.out.println("WARN: not enougth data in \"data/" + algoritm + "/output.txt\" !!!");
				break;
			}

			String word = javaStringLiteral(line);
			String stem = javaStringLiteral(lineOut);
			String pair = word + " : " + stem;
			stemList.add(pair);
			lineOut = null;
		}

		voc.close();
		out.close();

		return stemList;
	}

	/*
	 * http://stackoverflow.com/questions/2453231/how-would-you-convert-a-string-
	 * to-a-java-string-literal
	 */
	private static String javaStringLiteral(String str) {
		StringBuilder sb = new StringBuilder("\"");
		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			if (c == '\n') {
				sb.append("\\n");
			} else if (c == '\r') {
				sb.append("\\r");
			} else if (c == '"') {
				sb.append("\\\"");
			} else if (c == '\\') {
				sb.append("\\\\");
			} else if (c < 0x20) {
				sb.append(String.format("\\%03o", (int) c));
			} else if (c >= 0x80) {
				sb.append(String.format("\\u%04x", (int) c));
			} else {
				sb.append(c);
			}
		}
		sb.append("\"");
		return sb.toString();
	}
}
