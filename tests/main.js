import assert from "assert";

describe("slot-booking-react", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "slot-booking-react");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});



// const Activate=()=>{
//         const seat = slot.seatNo-1
//         Meteor.call('booked',{seat,user,id}, (err, res)=>{
//             if (err) {
//                 alert(`Some Error Occoured in activating: ${err}`);
//                 return
//             }
//             setStatus(false);
//             setOpen(false);
//             setSlotuser(Meteor.userId())
//         })
//     }
//     const DeActivate=()=>{
//         const seat = slot.seatNo-1
//         Meteor.call('remove',{seat,user,id,slot},(err, res)=>{
//             if (err) {
//                 alert(`Some Error Occoured in deactivating: ${err}`);
//                 return
//             }
//             setStatus(true);
//             setOpen(false);    
//         })