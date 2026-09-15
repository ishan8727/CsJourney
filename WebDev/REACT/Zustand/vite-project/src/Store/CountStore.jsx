import { create } from 'zustand'

export const useCount = create((set)=>({
    count:0,
    increaseCount: ()=> set((state)=>({count: state.count+1})),
    decreaseCount: ()=> set((c)=>({count: c.count-1})),
    resetCount: ()=>(set({count: 0}))
}))


function createUser(set){
    return{
        user:'Ishan',

        udpateName: function (updatedName){
            set(function(name){
                return{
                    name:updatedName
                }
            })
        },

        deleteName: function(){
            set(function(){
                return{
                    name:''
                }
            })
        }
    }
}

export const useName = create(createUser);

// -------------------------------------------------------------------------------------------------------


export function createMyStore(set) {

    return {
        count: 0,

        increaseCount: function () {
            set(function (state) {
                return {
                    count: state.count + 1
                };
            });
        },

        decreaseCount: function () {
            set(function (state) {
                return {
                    count: state.count - 1
                };
            });
        },

        resetCount: function () {
            set({
                count: 0
            });
        }
    };
}

export const count2 = create(createMyStore);