import * as tf from "@tensorflow/tfjs"
// Define a model for linear regression
const model = tf.sequential()
model.add(tf.layers.dense(
    { units:1, inputShape:[1] }
))
// prepare model for training : spesify loss and the optimizer
model.compile({ loss: "meanSquaredError", optimizer:"sgd"})
// provide some data
const xs = tf.tensor1d([7.9,8.0,8.3,8.5,8.6,8.4]) //luas kavling
const yx = tf.tensor1d([738967,74231,750984,759598,763905,755291]) //harga
// training the model
model.fit(xs,yx).then(() => {
    const form = document.getElementById('proses')
    const input = document.getElementById('inputText')
    const predictPlaceholder = document.getElementById('predict')

    form.addEventListener("submit", e => {
        e.preventDefault()
        console.log("prediksi ...")
        const output = model.predict(tf.tensor2d([parseFloat(inputText.value)/10], [1,1]))
        predictPlaceholder.innerHTML = Array.from(output.dataSync())[0] * 1000
    })
})
// use the trained model 