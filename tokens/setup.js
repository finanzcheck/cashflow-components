module.exports = theo => {
  theo.registerValueTransform(
    'addunit',
    prop => prop.get('type') === 'size',
    prop => prop.get('value') + prop.get('meta').get('unit')
  );
  theo.registerTransform('web', ['addunit']);
};

// NOTE: needs `--setup [file]` option
