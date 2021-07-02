import createDataContext from "./createDataContext";

const upgrades = [
    {
        name: "engrais eco+",
        price: 5,
        count: 0,
        bonusType: "click",
        bonus: 1,
        priceEvolution: 50/100,
    }, {
        name: "engrais Bon Marché",
        price: 100,
        count: 0,
        bonusType: "money/s",
        bonus: 1,
        priceEvolution: 55/100,
    }, {
        name: "arrosoire eco+",
        price: 350,
        count: 0,
        bonusType: "click",
        bonus: 3,
        priceEvolution: 56/100,
    }, {
        name: "engrais rare",
        price: 1000,
        count: 0,
        bonusType: "click",
        bonus: 5,
        priceEvolution: 56/100,
    }, {
        name: "Jardinier",
        price: 2500,
        count: 0,
        bonusType: "money/s",
        bonus: 5,
        priceEvolution: 60/100,
    }, {
        name: "engrais de luxe",
        price: 10000,
        count: 0,
        bonusType: "money/s",
        bonus: 10,
        priceEvolution: 65/100,
    },

];

const GameReducer = ( state, action ) => {
    switch (action.type) {
        case 'get_money':
            return {...state, moneyCount: state.moneyCount+action.payload}
        case 'add_upgrade':
            if(action.payload.bonusType === "click")
                return {...state, clickValue: state.clickValue+action.payload.bonus}
                else
            return {...state, moneyS: state.moneyS+action.payload.bonus,}
        case 'use_money':
            return {...state, moneyCount: state.moneyCount-action.payload }
        case 'update_price_upgrades':
            return {...state, upgrades: state.upgrades.map(el => (
                  el.name=== action.payload.name? {...el, price: Math.round(el.price+(el.price*el.priceEvolution)) }: el
                )) }
        case 'update_count_upgrades':
            return {...state, upgrades: state.upgrades.map(el => (
                  el.name=== action.payload.name? {...el, count: el.count+1}: el
                )) }
        case 'update_bonus_upgrades':
            return {...state, moneyCount: state.moneyCount-action.payload }
        default:
            return state
    }
}

const getMoney = dispatch => async(clickValue) => {
    dispatch({type: "get_money", payload: clickValue})
};
const buyUpgrade = dispatch => async (upgrade) => {
    let { price, name, bonus } = upgrade
    dispatch({type: "use_money", payload: price})
    dispatch({type: "add_upgrade", payload: upgrade})
    dispatch({type: "update_price_upgrades", payload: { name }})
    dispatch({type: "update_count_upgrades", payload: { name }})
};

export const {Context, Provider} = createDataContext(GameReducer, {getMoney, buyUpgrade}, { moneyCount :  0, clickValue: 1, moneyS: 0, passif: false, upgrades })
