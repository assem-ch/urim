import org.tartarus.snowball.SnowballStemmer;

public class StemmerTest{
	static String cp = System.getProperty("console.encoding","Cp866");

	public static void main(String[] args) {
		try {
			Class<?> stemClass = Class.forName("org.tartarus.snowball.ext."
						+ args[0] + "Stemmer");
			SnowballStemmer stemmer = (SnowballStemmer) stemClass
						.newInstance();

			stemmer.setCurrent(args[1]);
			stemmer.stem();

			System.out.write(stemmer.getCurrent().getBytes(cp));

		} catch (Exception ex) {
			System.out.println(ex);
		}
	}
}
