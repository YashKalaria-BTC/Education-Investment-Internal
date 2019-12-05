module.exports = {
  extends: ['@react-native-community', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'max-len': ['error', {code: 220}],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/accessible-emoji': 'off',
  },
};
