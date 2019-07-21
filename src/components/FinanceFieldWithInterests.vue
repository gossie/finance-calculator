<template>
    <div class="tile is-child box">
        <div class="field">
            <label :for="fieldid" class="label">{{ label }}</label>
            <div class="control">
                <input :id="fieldid" type="text" class="input" :name="fieldid" required v-model.number="value" @change="onValueChange" />
                <input id="interests" type="text" class="input" name="interests" required v-model.number="interests" placeholder="Interests" @change="onInterestsChange" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "finance-field-with-interests",
    props: {
        fieldid: String,
        label: String,
        defaultinterests: Number
    },
    data: function() {
        this.$emit('interests-changed', {
            fieldId: this.fieldid,
            value: this.defaultinterests
        });

        return {
            value: 0,
            interests: this.defaultinterests
        }
    },
    methods: {
        onValueChange: function() {
            this.$emit('value-changed', {
                fieldId: this.fieldid,
                value: this.value
            });
        },
        onInterestsChange: function() {
            this.$emit('interests-changed', {
                fieldId: this.fieldid,
                value: this.interests
            });
        }
    }
};
</script>
