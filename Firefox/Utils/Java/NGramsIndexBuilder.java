package org.apache.nutch.analysis.lang;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;

import org.apache.nutch.analysis.lang.NGramProfile.NGramEntry;

public class NGramsIndexBuilder {
	public static void GenerateJsIndex(
			HashMap<CharSequence, NGramEntry[]> tmpIdx)
			throws UnsupportedEncodingException, IOException {

		File f = new File("NGramsIndex.js");
		FileOutputStream fos = new FileOutputStream(f);

		Iterator<CharSequence> keys = tmpIdx.keySet().iterator();
		boolean isFirst = true;
		while (keys.hasNext()) {
			CharSequence entry = keys.next();
			NGramEntry[] array = tmpIdx.get(entry);
			if (array != null) {
				StringBuffer line = new StringBuffer();
				if (!isFirst)
					line.append(",\n");
				line.append(javaStringLiteral(entry.toString()) + ":");

				line.append(formatArrayStr(array));

				fos.write(line.toString().getBytes("UTF-8"));
				isFirst = false;
			}
		}

		fos.flush();
		fos.close();
	}

	private static String formatArrayStr(NGramEntry[] array) {
		StringBuffer arrVal = new StringBuffer("[");

		boolean isFirst = true;
		for (NGramEntry entry : array) {
			if (!isFirst)
				arrVal.append(",");
			arrVal.append("new NGramEntry(" + entry.getFrequency() + ",\""
					+ entry.getProfile().getName() + "\")");
			isFirst = false;
		}

		arrVal.append("]");

		return arrVal.toString();
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
