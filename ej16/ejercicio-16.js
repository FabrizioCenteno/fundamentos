// ejercicio 16
codeDocument.innerHTML = `
<pre>

function celsiusAFahrenheit(celsius) {
     console.log(\`${celsius} celsius son ${(celsius * 9/5) + 32} fahrenheit\`);
}
celsiusAFahrenheit(400);

</pre>
`;

function celsiusAFahrenheit(celsius) {
     console.log(`${celsius} celsius son ${(celsius * 9/5) + 32} fahrenheit`);
}
celsiusAFahrenheit(400);