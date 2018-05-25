const clustering = {
  title: "Clustering",
  body: "Useful for organizing your data into groups based on similarities across columns.  By clustering wines from around the world based on flavor profile and country of origin, clustering could potentially bundle wines into wine regions of the world without ever knowing that wine regions exist."
}

const decisionTrees = {
  title: "Decision Trees",
  body: "Decision trees dynamically decide what information is most important to find an end-result.  Passing in HIPA-compliant medical records, an insurance company use metrics to build a tree to determine a person's chances of having hypertension.  The tree would probably decide that the most important metric is age and the second most important is weight.  (Remember, our machines are not doctors, though!)"
}

const neuralNets = {
  title: "Neural Networks",
  body: "Neural Networks can be trained to find relationships between data.  We have used a very primitive neural network to teach a computer how to recognize colors by their numeric values, but they are capable of so much more!"
}

const info = [];
info.push(clustering);
info.push(decisionTrees);
info.push(neuralNets);

export default info;