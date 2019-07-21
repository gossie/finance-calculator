import { shallowMount } from "@vue/test-utils";
import FinanceField from "@/components/FinanceField.vue";

describe("FinanceField.vue", () => {
    it("renders props.msg when passed", () => {
        const fieldid = "myField";
        const label = "Field";
        const financeField = shallowMount(FinanceField, {
            propsData: {
                fieldid,
                label
            }
        });
        // expect(financeField.value).toMatch("0");
    });
});
