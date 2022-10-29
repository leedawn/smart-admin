import { defineComponent, h, createVNode, createTextVNode } from "vue";
const RenderButton = defineComponent({
  name: "renderButton",
  render() {
    return h("button", null, "myButton");
  }
});
const _sfc_main = {};
const JsxButton = defineComponent({
  name: "jsxButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `py-2 px-4 font-semibold text-white cursor-pointer bg-${props2.color}-500 border-none`
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const SButton = {
  install(app) {
    app.component(Button.name, Button);
  }
};
const entry = {
  install(app) {
    app.component(RenderButton.name, RenderButton);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JsxButton.name, JsxButton);
    app.component(SButton.name, SButton);
  }
};
export {
  JsxButton,
  RenderButton,
  SButton,
  _sfc_main as SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.esm.js.map
