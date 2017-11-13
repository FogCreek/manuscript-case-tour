var Feature = function (id) {
  this.id = id;
  // debugger;
};

// Feature.prototype.teach = function (){
//   var self = this;
//   stopTutoring();
//   $('#teach-modal-title').html(self.name());
//   $.ajax({
//     url : "/features/" + self.slug() +"-teacher.html",
//     success : function(result){
//       $('#teach-modal-text').html(result);
//       $('#teach-modal').modal();
//     }
//   });
// };

// Feature.prototype.tutor = function (){
//   var self = this;
//   $.ajax({
//     url : "/features/" + self.slug() +"-tutor.html",
//     success : function(result){
//       $('#tutor-text').html(result);
//       $('#kakapo-bubble-wrapper').show();
//     }
//   });
// };

Feature.prototype.teach = function (){
  // stopTutoring();
  var self = this;
  $('#teach-modal-title').html(self.name())
  $('#teach-modal-text').html($("#" + self.slug() +"-teacher").html());
  $('#teach-modal').modal();
};

Feature.prototype.tutor = function (){
  var self = this;
  $('#tutor-text').html($("#" + self.slug() +"-tutor").html());
  $('#kakapo-bubble-wrapper').show();
  // $.ajax({
  //   url : "/features/" + self.slug() +"-tutor.html",
  //   success : function(result){
  //     $('#tutor-text').html(result);
  //     $('#kakapo-bubble-wrapper').show();
  //   }
  // });
};

// Returns the capitalized name of the feature, which populates the "teach" modal.
Feature.prototype.name = function (){
  var words = this.slug().split("-");
  var capitalizedWords = [];
  words.forEach(function(word){
    if (word != "and"){
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.substr(1));
    } else {
      capitalizedWords.push(word);
    }
  });
  return capitalizedWords.join(" ");
};

// Checks if id ends in 1 or 2 (indicating it's a linked feature) and returns slug
// Ex:    kiln-changesets1 --> kiln-changesets
//        notify-more-users --> notify-more-users
Feature.prototype.slug = function () {

  var lastLetter = this.id.charAt(this.id.length - 1);
  
  if (!isNaN(lastLetter)) {
    return this.id.substring(3, this.id.length - 1);
  } else {
    return this.id.substring(3, this.id.length);
  }
};

// Returns all features linked by classname if it's a linked feature or
// undefined if it is not
Feature.prototype.linkedFeature = function () {
  return $('.' + this.slug());
};

// Adds hover class to features linked to this
Feature.prototype.highlightLinked = function () {
  if (this.linkedFeature()) {
    this.linkedFeature().addClass('feature-box-hover');
  }
};