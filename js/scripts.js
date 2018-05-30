var a = 5;
var b = 8;
var value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    document.write('wynik dodatni');
} else if (value < 0) {
    document.write('wynik ujemny');
} else {
    document.write('wynik jest równy zero');
}
