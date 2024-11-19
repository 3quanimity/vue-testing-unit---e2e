import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleButton from '../SimpleButton.vue'

const wrapper = mount(SimpleButton, {props: {text: 'Cliquez'}})

describe('SimpleButton', () => {
    it('SHOULD have the proper text', () => {
        expect(wrapper.text()).toStrictEqual('Cliquez')
    })
})