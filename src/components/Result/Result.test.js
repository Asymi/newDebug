import { default as Result } from '.';
import { shallow } from 'enzyme';

describe('Result', () => {
    let wrapper;

    beforeEach(() => {
        const resultStub = { sunrise: "0500", sunset: "2200" };
        wrapper = shallow(<Result result={resultStub}/>);
    });

    test('it shows the sunrise results', () => {
        const sunrise = wrapper.find('#sunrise')
        expect(sunrise).toHaveLength(1);
        expect(sunrise.find('p').text()).toContain("0500");
    });

    test('it shows the sunset results', () => {
        const sunset = wrapper.find('#sunset')
        expect(sunset).toHaveLength(1);
        expect(sunset.find('p').text()).toContain("2200");
    });

});