(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var
   theImages = document.querySelectorAll('.data-ref'),
   theName = document.querySelector('.modelName'),
   thePrice = document.querySelector('.priceInfo'),
   theDetail = document.querySelector('.modelDetails'),
   appliedClass ;

   function changeElements(){

  let objectIndex = carData[this.id];
    thePrice.firstChild.nodeValue = objectIndex.price;
    theDetail.firstChild.nodeValue = objectIndex.detail;
    theName.firstChild.nodeValue = objectIndex.name;

    theImages.forEach(function(element,index){
      element.classList.add('nonActive');
    })

    this.classList.remove('nonActive');

    appliedClass = this.id;
  }

 theImages.forEach(function(element, index){
   element.addEventListener('click', changeElements, false)
 });

changeElements.call(document.querySelector('#F55'));

})();
