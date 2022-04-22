const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
// Register CubestMedium font
Canvas.registerFont(`${__dirname}/assets/fonts/CubestMedium.otf`, { family: "CubestMedium" });
//unitalic
Canvas.registerFont(`${__dirname}/assets/fonts/Uni-Italic.ttf`, { family: "Unitalic" });
//built
Canvas.registerFont(`${__dirname}/assets/fonts/Bult.ttf`, { family: "Built" });
//Beam
Canvas.registerFont(`${__dirname}/assets/fonts/beamweaponital.ttf`, { family: "BeamweaponItal" });
Canvas.registerFont(`${__dirname}/assets/fonts/BrushKing.otf`, { family: "brush" });

//gfx
module.exports.customGfx = require('./src/gfx/gfxCustom')