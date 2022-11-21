module.exports = {
    style:{
postcss:{
    plugins:[
        require('tailwindcss'),
        require('autoprefixer'),
    ],
},
    },
}

/*module.exports= {
  mode: 'development', 
  //adding server
  devServer:{
      port:8001,
  },
};
*/
/*
const path = require("path")
module.exports ={
    webpack:{
        //configure path alias
        alias:{
            "@": path.join(__dirname,"src"),
        }
    },
    jest: {
        configure: {
          moduleNameMapper: {
            '^@(.*)$': '<rootDir>/src$1'
          }
        }
      },
      "settings": {
        "import/resolver": {
          "alias": {
            "map": [["@", "./src"]]
          }
        }
      },

};
*/

