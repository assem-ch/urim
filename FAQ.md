  * **[I don't see the add-on icon on toolbar](http://code.google.com/p/urim/wiki/FAQ#After_installation_nothing_happens_-_i_even_don%27t_see_the_a)**

  * **[Sidebar appears but there are no tag-cloud](http://code.google.com/p/urim/wiki/FAQ#I_launch_Urim_,_left_sidebar_appears_but_there_are_no_tag-cloud)**

  * **[Stop Words](http://code.google.com/p/urim/wiki/FAQ#Some_words_on_my_own_language_appears_too_frequently)**

  * **[I want to run all tests myself](http://code.google.com/p/urim/wiki/FAQ#I_am_a_programmer_or_very_smart_user_;-)._I_want_to_run_all_test)**

  * **[Logs](http://code.google.com/p/urim/wiki/FAQ#I_want_to_see_Urim_logs)**

  * **[How to change log level](http://code.google.com/p/urim/wiki/FAQ#How_to_change_log_level)**

  * **[How does this work ?](http://code.google.com/p/urim/wiki/FAQ?#How_does_this_work_?)**


# After installation nothing happens - i even don't see the add-on icon on toolbar #
Try reboot your computer.

# I launch **Urim**, left sidebar appears but there are no tag-cloud #
Ensure, that page you are working with loading is finished (page loading progress bar is absent). If it is not, **Urim** will wait for page load is completed and just after that produce a tag-cloud. You can stop loading each page any time by pressing **Esc** key on your keyboard.

# Some words on my own language appears too frequently #
This usually is called **Stop Words**. For example, "_the_", "_on_", "_very_" and others are English stop words. They appear on each text more frequently, then other words, so we need to consider this. If you find some such words, please contact [me](mailto:o.mazko@mail.ru) or build add-on from sources yourself. To do this [JRE](http://java.com/en/download/index.jsp) and [Ant](http://ant.apache.org/bindownload.cgi) need to be installed on working machine:
  1. Download **Urim** [sources](http://urim.googlecode.com/svn/trunk/) to _**SomeFolder**_.
  1. Edit your language stop words file in _**SomeFolder**\Utils\Java\StopGenerator\StopGeneratorBin\stop_ directory. Notice, that all stop words files uses **UTF-8** encoding.
  1. To compile stop words, enter in directory _**SomeFolder**\Utils\Java\StopGenerator\StopGeneratorBin_ and type _**java StemmerStopBuilder ../../../../modules/analysis/filter/ShingleStopFilter.js**_ or just execute **run.bat** in Windows.
  1. Almost finished - we need to make **Urim** add-on. Enter in _**SomeFolder**_ directory and type **ant**. If success, enter in _**SomeFolder**\dist_ and take fresh **urim.xpi**. Drag it on Firefox for offline installation.

# I am a programmer or very smart user ;-). I want to run all tests myself #
**Urim** uses **[MozMill](https://addons.mozilla.org/en-US/firefox/addon/9018/)** framework to test code logic.
  1. Install **Urim**.
  1. Install **MozMill**.
  1. Launch **MozMill**. In "**Editor**" tab go **Actions->Run Directory** and select _**SomeFolder\Tests\Mozmill**_, where _**SomeFolder**_ is **Urim** [sources](http://urim.googlecode.com/svn/trunk/) directory, then press **OK**.
  1. Wait.
Here are some tests time measures:
  * _Ubuntu + Corei3 2.13 GHz + 3Gb memory_ all tests completed in about 45 minutes
  * _WinXP + Pentium3 667 MHz + 384 Mb memory_ testing time is about one night )))

# I want to see Urim logs #
Add-on uses **[log4moz](https://wiki.mozilla.org/Labs/JS_Modules#Logging)** logging system. On Windows XP log is here: _**%appdata%\Mozilla\Firefox\Profiles\80gg64am.default\urim\logs\verbose-log.txt**_,
on Kubuntu 10.10 - _**/home/oleg/.mozilla/firefox/zdrpytk3.default/urim/logs/verbose-log.txt**_, where _**80gg64am.default**_ and _**zdrpytk3.default**_ is your [profile](http://support.mozilla.com/en-US/kb/Profiles) name

# How to change log level #
Open _**loggerWrapper.js**_ file: on Windows XP - _**%appdata%\Mozilla\Firefox\Profiles\80gg64am.default\extensions\o.mazko@mail.ru\chrome\urim.jar\content\**_,
on Kubuntu 10.10 - _**/home/oleg/.mozilla/firefox/zdrpytk3.default/extensions/o.mazko@mail.ru/chrome/urim.jar/content/**_, where _**80gg64am.default**_ and _**zdrpytk3.default**_ is your [profile](http://support.mozilla.com/en-US/kb/Profiles) name. Replace line **root.level = Log4Moz.Level.Warn;** with **root.level = Log4Moz.Level.All;**, update _**urim.jar**_ archive and restart Firefox. After that you can explore some additional information like time measurements, identified language in [Error Console](https://developer.mozilla.org/en/Error_Console) if Firefox is running or text file logs of course any time as it was described in previous [topic](http://code.google.com/p/urim/wiki/FAQ#I_want_to_see_Urim_logs).

# How does this work ? #
  * If user selected some text to analyze, add-on just call JavaScript _**[window.getSelection](https://developer.mozilla.org/en/window.getSelection)**_ method to extract text data. In other case for a given page and each of it's frames add-on extracts **html** source and convert it to text with special Firefox [nsIFormatConverter](http://doxygen.db48x.net/mozilla/html/interfacensIFormatConverter.html) interface. To produce one single string all text fragments are concatenating by adding "_**.\n**_" sequence in the end of each. This is very simple solution and in place of frames splice we have nonexistent word phrases - one word(s) from one frame and other from another. But frequency of such phrases is very low, and it does not matter in normal pages.
  * Identify text language.
  * Tokenize (split) extracted text into words. Very simple whitespace tokenizer mechanism used. As the result difficult text, programming sources for example, gives not pretty words on result tag-cloud. Planning to change this peace of code in feature.
  * Remove the commoner morphological and inflexional endings from words with [Snowball](http://snowball.tartarus.org/) algorithm, selected by already identified text language.
  * Make word phrases with [n-gram](http://en.wikipedia.org/wiki/N-gram) (shingles) algorithm and add them to words list. Calculate each word item boost value, considering whether it contains [Stop Words](http://code.google.com/p/urim/wiki/FAQ#Some_words_on_my_own_language_appears_too_frequently) or not.
  * Sort word items, considering boosting and frequency and show first 50 items as the tag-cloud.