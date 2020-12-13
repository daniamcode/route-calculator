import axios from 'axios'
import {
    showCost,
    loadCost
} from "../routeActions";
import {
    option1,
    option2
} from '../../../data/constants';
import {
    googleMapsApiKey
} from "../../../data/constants";

jest.mock('axios');

describe('showCost', () => {
    it('returns expected value', () => {
        const result = showCost();

        expect(result.payload).toBe(true)
    })
})

describe('loadCost on option1', () => {
    it('returns expected value', () => {
        const result = loadCost(option1, "car", 100, "", "", 5);

        expect(result.payload).toEqual({
            cost: 500
        })
    })
})

describe('dispatch loadCost on option2', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
    });

    afterEach(() => {
        dispatch.mockClear();
        axios.get.mockClear();
    });

    test('dispatches', () => {
        loadCost(option2)(dispatch);

        expect(dispatch).toHaveBeenCalled();
    })

    test('Should dispatch isLoading true when still loading', async () => {
        loadCost(option2)(dispatch);

        expect(dispatch.mock.calls[0][0].payload.isLoading).toBe(true);
    });

    xtest('Should dispatch error when axios throws a generic error', async () => {
        axios.get.mockReturnValueOnce(Promise.reject({
            response: 'some error'
        }));

        await loadCost(option2)(dispatch);

        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({
            response: 'some error'
        });
    });

    xtest('Should dispatch error when axios throws a network error', async () => {
        axios.get.mockReturnValue(Promise.reject({}));

        await loadCost(option2)(dispatch);

        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({
            response: 'Network Error'
        });
    });

    
    xtest('Should dispatch response when axios returns distance', async () => {
        // axios.get.mockImplementation((url) => {
        //     const origin = 'Vic';
        //     const destination = 'Berga'
        //     const originGeoCodedFormatted = {lat: 41, lng: 2}
        //     const destinationGeoCodedFormatted = {lat: 42, lng: 3}
    
        //     // eslint-disable-next-line default-case
        //     switch (url) {
        //       case `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${googleMapsApiKey}`:
        //         return Promise.resolve({})
        //       case `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${googleMapsApiKey}`:
        //         return Promise.resolve({})
        //         case `http://router.project-osrm.org/route/v1/driving/${originGeoCodedFormatted.lng},${originGeoCodedFormatted.lat};${destinationGeoCodedFormatted.lng},${destinationGeoCodedFormatted.lat}`:
        //             return Promise.resolve({option: option2})
        //     //   default:
        //     //     return Promise.reject(new Error('not found'))
        //     }
        //   })

        axios.get.mockImplementationOnce(Promise.resolve({
            origin: 'Vic'
        })).axios.get.mockImplementationOnce(Promise.resolve({
            destination: 'Berga'
        })).axios.get.mockImplementationOnce(Promise.resolve({
            option: option2
        }))
        
        //     return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${googleMapsApiKey}`).then(users => expect(users).toEqual({data: [{name: 'Bob', items: []}]}))

        // // axios.get.mockResolvedValue().axios.get.mockResolvedValue().axios.get.mockResolvedValue()

        await loadCost(option2)(dispatch);

        expect(dispatch.mock.calls[1][0].payload.option).toBe(option2);
    });
})

describe('no option1 or option2', () => {
    it('returns expected value', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        console.log("No option 1 or 2?");

        loadCost('whatever')

        expect(consoleSpy).toHaveBeenCalledWith("No option 1 or 2?");
    })
})