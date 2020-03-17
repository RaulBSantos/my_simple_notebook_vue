import { createLocalVue, mount } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueMarkdown from 'vue-markdown';
import NoteTextContent from '@/components/NoteTextContent.vue';

describe('NoteTextContent.vue', () => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  localVue.use(IconsPlugin);
  localVue.component('vue-markdown', VueMarkdown);

  it('should render text when passed', () => {
    const text = 'Texto exemplo';
    const wrapper = mount(NoteTextContent, {
      localVue,
      propsData: {
        text: text
      }
    });
    expect(wrapper.text()).toContain(text);
  });

  it('should render text with markdown tags', () => {
    const textWithMarkdown = 'Texto em **markdown**';
    const textAndTagExpected = 'Texto em <strong>markdown</strong>';
    const wrapper = mount(NoteTextContent, {
      localVue,
      propsData: {
        text: textWithMarkdown
      }
    });
    expect(wrapper.text()).not.toContain(textWithMarkdown);
    expect(wrapper.html()).toContain(textAndTagExpected);
  });

  it('should call `afterEditText` when focus out', () => {
    const spy = jest.spyOn(NoteTextContent.methods, 'afterEditText');
    const wrapper = mount(NoteTextContent, {
      localVue,
      propsData: {
        isNew: true,
        state: 'editing'
      }
    });
    expect(wrapper.find('textarea').exists()).toBeTruthy();
    wrapper.find('textarea').trigger('blur');
    expect(spy).toHaveBeenCalled();
  });
});
