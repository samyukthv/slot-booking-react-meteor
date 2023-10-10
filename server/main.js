
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import slotsCollection from '../imports/collection/slotsCollection';
import Slot from "../imports/classes/slotCategory";





Meteor.startup(() => {

    if (slotsCollection.find().count() === 0) {
        const platinum = new Slot()
        platinum.category = "platinum";
        platinum.price = 350;
        platinum.seatCount = 24;
        for (let i = 1; i <= platinum.seatCount; i++) {
            platinum.singleSlots.push({
                seatNumber: i,
                bookingStatus: false,
                bookedUser: ""

            })
        }
        platinum.save()


        const gold = new Slot()
        gold.category = "gold";
        gold.price = 200;
        gold.seatCount = 18
        for (let i = 1; i <= gold.seatCount; i++) {
            gold.singleSlots.push({
                seatNumber: i,
                bookingStatus: false,
                bookedUser: ""

            })
        }
        gold.save()


        const silver = new Slot()
        silver.category = "gold";
        silver.price = 200;
        silver.seatCount = 18
        for (let i = 1; i <= silver.seatCount; i++) {
            silver.singleSlots.push({
                seatNumber: i,
                bookingStatus: false,
                bookedUser: ""

            })
        }
        silver.save()



    }

})