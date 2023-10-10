import { Meteor } from 'meteor/meteor';
import  slotsCollection from "../../collection/slotsCollection"



Meteor.publish('slot',function publishSlots(){
    return slotsCollection.find({})
})