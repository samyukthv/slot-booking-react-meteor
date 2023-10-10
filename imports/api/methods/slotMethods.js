import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import slotsCollection from '../../collection/slotsCollection';


Meteor.methods({
    "slotsCollection.booked"(seatNumber,user,id){
        check(seatNumber,Number);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
          }

          const category= slotsCollection.find({_id:id})
          const singleSlot= category.singleSlots[seatNumber]
          singleSlot.bookingStatus=true
          singleSlot.bookedUser=user
          category.save()
    },

    "slotCollection.remove"(seatNumber,id){
        check(seatNumber,Number);
        
        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        
        const category=slotsCollection.find({_id:id})
        const singleSlot=category.singleSlots[seatNumber]
        singleSlot.bookingStatus=false
        singleSlot.bookedUser=""
        category.save()
    }
})

