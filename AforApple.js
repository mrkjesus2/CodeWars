function print(ht) {
	if (ht < 4)
		return '';

	var height = ht % 2 === 0 ? ht : ht - 1;
	var lineLength = 2 * height - 1;
	var line = 2;
	var padding = Array(parseInt(lineLength/2 + 1)).join(' ');
	var inrPadding = 0;
	var text = padding + 'A' + padding + '\n';

	while (line <= height) {
		padding = padding.slice(0, -1);
		if (line === height/2 + 1)
			text += padding + Array(height/2 + 1).join('A ') + 'A' + padding;
		else
			text += padding + 'A' + Array(inrPadding * 2 + 2).join(' ') + 'A' + padding;
		if (line !== height)
			text += '\n';
		line++;
		inrPadding++;
	}
	console.log(text);
	return text
};

print(4);

print(10);
print(13);