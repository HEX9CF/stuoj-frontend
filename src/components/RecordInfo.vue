<template>
    <div v-if="show">
        <ElDescriptions border class="record-info" :column="4">
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon>
                            <Cpu />
                        </el-icon>
                        状态
                    </div>
                </template>
                <span :style="{ color: JudegeStatusesColor[result.status as JudegeStatuses] }">{{
                    JudegeStatusesAbbr[result.status as JudegeStatuses] }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon>
                            <Coin />
                        </el-icon>
                        分数
                    </div>
                </template>
                {{ result.score ?? 0 }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon>
                            <Timer />
                        </el-icon>
                        耗时
                    </div>
                </template>
                {{ result.time ?? 0 }}s
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon>
                            <PieChart />
                        </el-icon>
                        内存
                    </div>
                </template>
                {{ result.memory ?? 0 }}kb
            </el-descriptions-item>
        </ElDescriptions>
        <ElTable :data="judge_result" border class="judge-result" stripe>
            <ElTableColumn prop="testcase_id" label="测试点" width="80" />
            <ElTableColumn prop="status" label="状态" width="100">
                <template #default="scope">
                    <span :style="{ color: JudegeStatusesColor[scope.row.status as JudegeStatuses] }">{{
                        JudegeStatusesAbbr[scope.row.status as JudegeStatuses] }}</span>
                </template>
            </ElTableColumn>
            <ElTableColumn prop="time" label="时间" width="100">
                <template #default="scope">
                    {{ scope.row.time }}s
                </template>
            </ElTableColumn>
            <ElTableColumn prop="memory" label="内存" width="100">
                <template #default="scope">
                    {{ scope.row.memory }}KB
                </template>
            </ElTableColumn>
            <ElTableColumn prop="status" label="信息" width="1000">
                <template #default="scope">
                    {{ JudegeStatusesString[scope.row.status as JudegeStatuses] }}
                </template>
            </ElTableColumn>
        </ElTable>
    </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/user';
import { getRecordInfo } from '@/apis/record';
import type { Submission, Judgement } from '@/types/Record';
import { ref, watch } from 'vue';
import { JudegeStatuses, JudegeStatusesAbbr, JudegeStatusesColor, JudegeStatusesString } from '@/types/Judge';
import { ElTableColumn } from 'element-plus';

const { execute, state } = getRecordInfo();
const show = ref(false);
let judge_result: Judgement[];
let result: Judgement;

const { token } = userStore();

const props = withDefaults(defineProps<{
    id?: number;
}>(), {
    id: 0,
});

const fetchData = async () => {
    if (props.id === 0) return;
    await execute({
        headers: {
            Authorization: token.value
        },
        id: props.id
    });
    if (state.value?.code === 1) {
        const res = state.value?.data as {
            submission: Submission,
            judgements: Judgement[]
        };
        judge_result = res.judgements;
        result = res.submission;
        show.value = true;
    }
};

// 在组件挂载时首次获取数据
fetchData();

// 监听 id 变化并重新获取数据
watch(() => props.id, fetchData);

</script>

<style scoped>
.cell-item {
    display: flex;
    align-items: center;
}

.judge-result {
    width: 100%;
    margin-top: 10px;
}

.judge-result>.ElTableColumn {
    width: 100%;
}
</style>