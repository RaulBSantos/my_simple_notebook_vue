import { shallowMount } from '@vue/test-utils';
import NoteTextContent from '@/components/NoteTextContent.vue';

describe('NoteTextContent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(NoteTextContent, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
