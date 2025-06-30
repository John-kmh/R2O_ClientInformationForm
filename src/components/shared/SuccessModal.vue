<!-- <template>
  <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title">Success</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="handleConfirm">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  message: {
    type: String,
    default: 'Submitted successfully!',
  },
  redirectUrl: {
    type: String,
    default: '/',
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:show']);
const router = useRouter();
let modalInstance;

onMounted(() => {
  const modalEl = document.getElementById('successModal');
  modalInstance = new bootstrap.Modal(modalEl);
  if (props.show) modalInstance.show();
});

watch(
  () => props.show,
  (newVal) => {
    if (modalInstance) {
      newVal ? modalInstance.show() : modalInstance.hide();
    }
  }
);

function handleConfirm() {
  emit('update:show', false);
  router.push(props.redirectUrl);
}
</script> -->
