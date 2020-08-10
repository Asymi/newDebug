import { default as SearchForm } from '.';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
    let wrapper, getResultMock, form;

    beforeEach(() => {
        getResultMock = jest.fn();
        wrapper = shallow(<SearchForm getResult={getResultMock}/>);
    });

    test('it renders a form with one text input and a submit', () => {
        form = wrapper.find('form');
        expect(form).toHaveLength(1);
        const inputs = form.find('input')
        expect(inputs).toHaveLength(2);
        expect(inputs.first().props().type).toBe('text');
    });

    test('it updates state on user input', () => {
        form = wrapper.find('form');
        const textInput = form.find('input').first();
        const initState = wrapper.state('location');
        textInput.simulate('change', { target: { value: 'Mexico City' } })
        const newState = wrapper.state('location');
        expect(newState).not.toEqual(initState)
    });

    test('it calls on getResult prop on form submission', () => {
        form = wrapper.find('form');
        wrapper.setState({ location: "Hong Kong" });
        form.simulate('submit', { preventDefault: jest.fn() });
        expect(getResultMock).toHaveBeenNthCalledWith(1, 'Hong Kong');
    })
});