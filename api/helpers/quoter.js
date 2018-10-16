module.exports = {
  sync: true,
  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',
  fn: function (inputs, exits) {
    let quotes = sails.config.custom.quotes;
    var totalAmount = quotes.length;
    var rand = Math.floor(Math.random() * totalAmount);
    return exits.success(quotes[rand]);
  }
};