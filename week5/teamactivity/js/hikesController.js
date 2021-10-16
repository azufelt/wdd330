import HikeModel from './hikeModel.js'; //import the hikeList and hike.name from the hikeModel
import HikesView from './hikesView.js';//import the UI build/view

// Just like with the view we should organize the functions we need to our controller. Let's use a class for this one

export default class HikesController {
  // build a constructor that holds an object of the model-objects' build features
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);//parentElement is a property that gets the parent Element/ parent ID
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  showHikeList() {
    // get the list of hikes from the hikeModel so we can use them
    const hikeList = this.hikeModel.getAllHikes();
    // get this parentElement, and update it with this item from the hikeList
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    // after the hikeList is built, add a listener to each individual object
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);//get the filtered hikeName from the hikeModel so we can use it
    this.hikesView.renderOneHikeFull(//hikeLight is "default", BUT if it gets touched, show the full hikeList details from the hikeView
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.-- because if not it will blink off before it renders the entire build-out hike list. build before it can listen. 
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    //get each object that we built, and put them into an arrary[] so we can loop through the list
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        //currentTarget returns the object whose event listener's callback is currently being invoked.
        //target -Returns the object to which event is dispatched (its target).
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}