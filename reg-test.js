var str="27 Feb 17:04 Crossword INFO - clue for vihari piratla (score :::SV272:::4.16:::, docscore: :::SV273:::1.0:::) at sentence# :::SV274:::175::: in doc #:::SV275:::4:::::::SV276:::I am ______________, a 3rd year CSE U.:::"
console.log(str.match(/:::SV[0-9]*:::(?:(?!(:::)).)*:::/g));
phantom.exit(1);