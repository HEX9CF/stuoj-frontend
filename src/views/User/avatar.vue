<template>
  <div class="upload-container">
    <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        accept="image/*"
        style="display: none"
    />
    <div class="upload-area" @click="triggerFileInput">
      <p>点击此处选择图片</p>
      <img v-if="imagePreview" :src="imagePreview" alt="预览图片" class="preview" />
    </div>
    <button @click="uploadImage" :disabled="!selectedFile">上传图片</button>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, watch } from 'vue';

export default {
  props: {
    initialAvatar: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const fileInput = ref(null);
    const selectedFile = ref(null);
    const imagePreview = ref(null);

    const triggerFileInput = () => {
      fileInput.value.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;

        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const uploadImage = () => {
      if (!selectedFile.value) {
        alert('请先选择一张图片');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile.value);

      axios
          .post('/user/avatar', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            alert('上传成功');
            emit('avatar-uploaded'); // 触发事件以更新用户信息
            console.log(response.data);
          })
          .catch((error) => {
            console.error('上传失败', error);
          });
    };

    // 初始化头像预览
    watch(() => props.initialAvatar, (newAvatar) => {
      imagePreview.value = newAvatar;
    });

    return {
      fileInput,
      selectedFile,
      imagePreview,
      triggerFileInput,
      handleFileChange,
      uploadImage,
    };
  },
};
</script>

<style scoped>
.upload-container {
  text-align: center;
}

.upload-area {
  width: 300px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

}

.preview {
  max-width: 100%;
  max-height: 100%;
}
</style>
