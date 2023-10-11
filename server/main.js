
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import slotsCollection from '../imports/collection/slotsCollection';
import Slot from "../imports/classes/slotCategory";
import '../imports/api/publication/slotPublication';
import "../imports/api/methods/slotMethods"


const SEED_USERNAME = 'samyukth123';
const SEED_PASSWORD = 'pass';

Meteor.startup(() => {

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          password: SEED_PASSWORD,
        });
      }

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
        silver.category = "silver";
        silver.price = 100;
        silver.seatCount = 12
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