import org.tartarus.snowball.SnowballStemmer;
import java.io.*;
import java.util.*;

public class StemmerTest{
	static String cp = System.getProperty("console.encoding","Cp866");

	public static void main(String[] args) {
		try {
			if(args.length == 2){
				Class<?> stemClass = Class.forName("org.tartarus.snowball.ext."
							+ args[0] + "Stemmer");
				SnowballStemmer stemmer = (SnowballStemmer) stemClass
							.newInstance();

				stemmer.setCurrent(args[1]);
				stemmer.stem();

				System.out.write(stemmer.getCurrent().getBytes(cp));
			}
			else proceedFile(args[0]);

		} catch (Exception ex) {
			System.out.println(ex);
		}
	}
	private static void proceedFile(String lng) throws Exception {
		BufferedReader voc = new BufferedReader(new InputStreamReader(
				new FileInputStream("../testsGenerator/data/" + lng + "/output.txt"), "UTF-8"));
				
		Set<String> stemSet = new HashSet<String>();
		String line = null;
		while ((line = voc.readLine()) != null) {
			if (line.isEmpty())
				continue;
			stemSet.add(line);
		}
		
		voc.close();
		BufferedWriter vocSetWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(lng + "VocSet.txt"), "UTF-8"));
		BufferedWriter stemWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(lng + "Stem.txt"), "UTF-8"));
		
		Class<?> stemClass = Class.forName("org.tartarus.snowball.ext."
							+ lng + "Stemmer");
		SnowballStemmer stemmer = (SnowballStemmer)stemClass.newInstance();
		
		for (String stem : stemSet) {
			stemmer.setCurrent(stem);
			stemmer.stem();
			vocSetWriter.append(stem);
			vocSetWriter.newLine();
			stemWriter.append(stemmer.getCurrent());
			stemWriter.newLine();
		}
		
		vocSetWriter.close();
		stemWriter.close();
	}
}
