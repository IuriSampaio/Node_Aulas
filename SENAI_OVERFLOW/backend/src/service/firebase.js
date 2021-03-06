
var admin = require("firebase-admin");

var serviceAccount = require("../../config/firebase.json");

const BUCKET = "senai-overflow-7076f.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();
const uplodaImage = (req, res, next) => {
	if(! req.file ) return next();

	const photo = req.file;
	
	//criando um array dividido pelo ponto e tirando o primeiro elemento do array
	const name = Date.now()+"."+photo.originalname.split(".").pop();

	const file = bucket.file(name);

	const stream = file.createWriteStream({
		metadata: { 
			contentType: photo.mimetype,
		},
	})

	stream.on("error",(e)=>{
		console.log(e)
	});

	stream.on("finish",async()=>{
		// tornar arquivo publico 
		await file.makePublic();
		// tornar a url publica
		req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${name}`;
	
		next();
	});

	stream.end(photo.buffer);


}


module.exports = uplodaImage;