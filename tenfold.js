function DoIt(){
			var value = $("#value").val().trim();
			var quotation = parseFloat($("#quotation").val().trim());
			var roman = AlienToRoman(value);
			var result = "NaN"
			if(roman) {
				var arabic = parseInt(RomanToArabic(roman));
				if(arabic>=0)
					result = arabic * quotation;
			}
			$("#result").text(result);
		}

		function AlienToRoman(alienVal) {
			var array = alienVal.split(" ");
			$.grep(array, function(value) {
				return value != "";
			});
			var roman = $(array).map(parseAlienToRoman);
			if($.inArray("NAN",roman)>=0)
				return false;
			else
				return roman.toArray().join("");
		}
		function parseAlienToRoman(i,alienVal){
			switch(alienVal.toUpperCase()) {
				case "ISK":
				return "I";
				break;
				case "VEV":
				return "V";
				break;
				case "XESH":
				return "X";
				break;
				case "LETH":
				return "L";
				break;
				case "CRESH":
				return "C";
				break;
				case "DORN":
				return "D";
				break;
				case "MERN":
				return "M";
				break;
				default:
				return "NAN";
			}
		}

		function RomanToArabic(sRomanNumeral)
		{
			if (!sRomanNumeral.length) return 0;
		//regexp that validates if it is a valid roman number
		if (!sRomanNumeral.match("^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$")) return -1;
		var sFirstChar = sRomanNumeral.charAt(0);
		var sTwoChars = sRomanNumeral.substr(0,2);
		//to convert, verify the two chars so we can check it is a subtraction case
		if (sFirstChar == "M") return 1000 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "CM") return  900 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "D") return  500 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "CD") return  400 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "C") return  100 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "XC") return   90 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "L") return   50 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "XL") return   40 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "X") return   10 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "IX") return    9 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "V") return    5 + RomanToArabic(sRomanNumeral.substr(1));
		if (sTwoChars == "IV") return    4 + RomanToArabic(sRomanNumeral.substr(2));
		if (sFirstChar == "I") return    1 + RomanToArabic(sRomanNumeral.substr(1));
	}