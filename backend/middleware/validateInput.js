const bannedRegex = /[='{(`)}$]+/;

module.exports.newSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    const nameAValide = sauceObject.name;
    const manufacturerAValide =  sauceObject.manufacturer;
    const descriptionAValide =  sauceObject.description;
    const mainPepperAValide =  sauceObject.mainPepper;
    if (nameAValide.match(bannedRegex) || manufacturerAValide.match(bannedRegex) || descriptionAValide.match(bannedRegex) || mainPepperAValide.match(bannedRegex)){
        return res
        .status(400)
        .json({error : "Le formulaire contient des caractères invalides( ='{(`)}$ )."})
    } else{
        next();
    }
}

module.exports.modifySauce = (req, res, next) => {
    const nameAValide = req.body.name;
    const manufacturerAValide =  req.body.manufacturer;
    const descriptionAValide =  req.body.description;
    const mainPepperAValide =  req.body.mainPepper;
    if (nameAValide.match(bannedRegex) || manufacturerAValide.match(bannedRegex) || descriptionAValide.match(bannedRegex) || mainPepperAValide.match(bannedRegex)){
        return res
        .status(400)
        .json({error : "Le formulaire contient des caractères invalides( ='{(`)}$ )."})
    } else{
        next();
    }
}