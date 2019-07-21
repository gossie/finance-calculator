<template>
    <div class="tile is-child box">
        <div class="field">
            <label :for="fieldid" class="label">{{ label }}</label>
            <div class="control">
                <input :id="fieldid"
                       type="text"
                       class="input"
                       :name="fieldid"
                       required
                       v-model.number="value"
                       @change="onValueChange" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "finance-field",
    props: {
        fieldid: String,
        label: String
    },
    data: function() {
        return {
            value: 0
        };
    },
    methods: {
        onValueChange: function() {
            this.$emit("value-changed", {
                fieldId: this.fieldid,
                value: this.value
            });
        }
    }
};
</script>
