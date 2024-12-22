<script setup lang="ts">
import { ref } from 'vue';
import { useTodoList } from '@/composables/useTodoList';
import ButtonAdd from '@/components/ButtonAdd.vue';
import ButtonDel from '@/components/ButtonDel.vue';
import ButtonEdit from '@/components/ButtonEdit.vue';
import ButtonShow from '@/components/ButtonShow.vue';

const todo = ref<string | undefined>('');
const isEdit = ref(false);
const { todoList, add, show, edit, del, check, countFin } = useTodoList();

const addTodo = () => {
  if (!todo.value) return;
  add(todo.value);
  todo.value = '';
};

const showTodo = (id: number) => {
  todo.value = show(id);

  if (todo.value) {
    isEdit.value = true;
  }
};
const editTodo = () => {
  if (!todo.value) return;
  edit(todo.value);
  isEdit.value = false;
  todo.value = '';
};
const deleteTodo = (id: number) => {
  isEdit.value = false;
  del(id);
};

const changeCheck = (id: number) => {
  check(id);
};

const countFinMethod = () => {
  console.log('method');
  const finArr = todoList.value.filter(todo => todo.checked);
  return finArr.length;
};
</script>

<template>
  <div>
    <input id="inp" type="text" class="todo-input" v-model="todo" placeholder="+ TODOを入力" />
    <ButtonEdit @edit-click="editTodo" v-if="isEdit" />
    <ButtonAdd @add-click="addTodo" v-else />
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoList" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <ButtonShow color="green" @show-click="showTodo(todo.id)" />
        <ButtonDel color="pink" @del-click="deleteTodo(todo.id)" />
      </div>
    </div>
  </div>
  <div class="finCount">
    <span>完了:{{ countFin }}、</span>
    <span>未完了:{{ countFinMethod() }}</span>
  </div>
</template>

<style scoped>
.todo-input {
  width: 250px;
  padding: 6px 8px;
  margin-right: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.btn {
  position: relative;
  padding: 6px 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #03a9f4;
  border: 1px solid #eee;
  border-radius: 6px;
}

btn:active {
  top: 1px;
}

.box_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.todo_list {
  display: flex;
  gap: 8px;
  align-items: center;
}

.todo {
  width: 250px;
  padding: 6px 8px;
  border: 1px solid #ccc;
}

.check {
  margin-right: 12px;
  transform: scale(1.6);
}

.btns {
  display: flex;
  gap: 4px;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}

.fin {
  color: #777;
  text-decoration: line-through;
  background-color: #ddd;
}

.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
