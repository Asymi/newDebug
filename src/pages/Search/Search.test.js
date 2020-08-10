import { default as Search, mSTP } from '.';
import { shallow } from 'enzyme';

describe('Search', () => {
    let wrapper, getResultMock;

    beforeEach(() => {
        getResultMock = jest.fn();
        wrapper = shallow(<Search.WrappedComponent 
            result={{}} location="" 
            getResult={getResultMock}
        />);
    });

    test('it renders', () => {
        expect(wrapper.find('#search')).toHaveLength(1);
    });

    test('it renders a SearchForm', () => {
        expect(wrapper.find('SearchForm')).toHaveLength(1);
    });

    test('it renders the location', () => {
        wrapper.setProps({ location: "New York City" });
        expect(wrapper.find('h1').text()).toContain("New York City");
    });

    test('it renders a message if receiving an error', () => {
        wrapper.setProps({ error: true });
        expect(wrapper.text()).toContain("Oops there's been an error!");
    });

    test('it renders a loading message when loading error', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.text()).toContain("Loading");
    });

    test('it calls getResult on load', () => {
        expect(getResultMock).toHaveBeenNthCalledWith(1, "London");
    });
});

describe('mapStateToProps', () => {
    test('it returns an object with 4 keys', () => {
        const stateStub = { result: {}, location: "", loading: true }
        expect(Object.keys(mSTP(stateStub)).length).toBe(4);
    });
});
