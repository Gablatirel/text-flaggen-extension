(function(Stax) {
  // Extension metadata (this part is usually in manifest.json but for simplicity, it is in the JS file)
  Stax.extensions.register('text-flaggen', {
    name: 'Text Flaggen',
    description: 'Generate flag descriptions based on text input',
    version: '1.0',
    category: 'AI Tools',
    icon: '🚩',
    blocks: [
      {
        name: 'generate_flag_description',
        label: 'Generate Flag Description',
        inputs: [
          {
            name: 'prompt',
            type: 'text',
            label: 'Describe the Flag'
          }
        ],
        action({ prompt }) {
          const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'purple'];
          const layouts = ['horizontal stripes', 'vertical stripes', 'diagonal split', 'central emblem', 'corner icon'];
          const symbols = ['star', 'sun', 'eagle', 'moon', 'circle', 'cross', 'wave'];

          const lowerCasePrompt = prompt.toLowerCase();
          let flagDescription = '';

          // Detect colors from the predefined list
          const detectedColors = colors.filter(color => lowerCasePrompt.includes(color));
          if (detectedColors.length > 0) {
            flagDescription += `Colors: ${detectedColors.join(', ')}. `;
          } else {
            flagDescription += 'Colors: Not specified. ';
          }

          // Detect layouts from the predefined list
          const detectedLayouts = layouts.filter(layout => lowerCasePrompt.includes(layout));
          if (detectedLayouts.length > 0) {
            flagDescription += `Layout: ${detectedLayouts.join(', ')}. `;
          } else {
            flagDescription += 'Layout: Not specified. ';
          }

          // Detect symbols from the predefined list
          const detectedSymbols = symbols.filter(symbol => lowerCasePrompt.includes(symbol));
          if (detectedSymbols.length > 0) {
            flagDescription += `Symbol: ${detectedSymbols.join(', ')}.`;
          } else {
            flagDescription += 'Symbol: Not specified.';
          }

          return {
            type: 'text',
            value: flagDescription
          };
        }
      }
    ]
  });
})(window.Stax);
