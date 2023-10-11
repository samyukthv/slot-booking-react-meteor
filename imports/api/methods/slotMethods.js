import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Slot from '../../classes/slotCategory';

Meteor.methods({
    "slotsCollection.booked"({seatNumber,userId,categoryId}){
        console.log(seatNumber,userId,categoryId);
        console.log("hellloooooooooooooooooooooooooooooooooooooooooooooo");
        check(seatNumber,Number);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
          }
          const category= Slot.findOne({_id:categoryId})
          category.singleSlots[seatNumber] = {...category.singleSlots[seatNumber], bookedUser: userId, bookingStatus: true}
        //   console.log(category);
        //   const singleSlot= category[]0.singleSlots[seatNumber]
        //   console.log(singleSlot,"single slottttttttt");
        //   singleSlot.bookingStatus=true
        //   singleSlot.bookedUser=userId
        console.log(category.singleSlots[seatNumber])
          category.save()
          console.log("bottom");
    },

    "slotCollection.remove"({seatNumber,id}){
        console.log(seatNumber,id);
        check(seatNumber,Number);
        
        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        
        const category=Slot.findOne({_id:id})
        console.log(category);

        const singleSlot=category.singleSlots[seatNumber]
        console.log(singleSlot,"thisssssssssssssssssssssssssssssss");
        singleSlot.bookingStatus=false
        singleSlot.bookedUser=""
        category.save()
    }
})

