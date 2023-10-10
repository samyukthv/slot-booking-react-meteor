import { Class } from 'meteor/jagi:astronomy';
import Slots from "../collection/slotsCollection"



const singleSlot = Class.create({
    name: 'singleSlot',
    fields: {
        seatNumber: {
            type: Number
        },
        bookingStatus: {
            type: Boolean
        },
        bookedUser: {
            type: String
        }

    }
})


const Slot = Class.create({
    name: "Slot",
    collection: Slots,
    fields: {
        category: String,
        price: Number,
        seatCount: Number,
        singleSlots: {
            type: [singleSlot],
            default: function () {
                return [];
            }
        }
    }
});


export default Slot