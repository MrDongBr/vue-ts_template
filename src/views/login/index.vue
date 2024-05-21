<template>
    <el-button :plain="true" @click="open">Show message {{ number }}</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script lang="ts" setup>
const number = ref(1)
const open = () => {
    ElMessage('This is a message.')
}

const openVn = () => {
    ElMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
        ])
    })
}
</script>
