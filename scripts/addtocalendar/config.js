export default ['$compileProvider', ($compileProvider) => 
  $compileProvider
    .aHrefSanitizationWhitelist(/^\s*(http(s)?|data):/)
];