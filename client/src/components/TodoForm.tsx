// import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";
// import { IoMdAdd } from "react-icons/io";
// import { BASE_URL } from "../App";

// const TodoForm = () => {
// 	const [newTodo, setNewTodo] = useState("");

// 	const queryClient = useQueryClient();

// 	const { mutate: createTodo, isPending: isCreating } = useMutation({
// 		mutationKey: ["createTodo"],
// 		mutationFn: async (e: React.FormEvent) => {
// 			e.preventDefault();
// 			try {
// 				const res = await fetch(BASE_URL + `/todos`, {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify({ body: newTodo }),
// 				});
// 				const data = await res.json();

// 				if (!res.ok) {
// 					throw new Error(data.error || "Something went wrong");
// 				}

// 				setNewTodo("");
// 				return data;
// 			} catch (error: any) {
// 				throw new Error(error);
// 			}
// 		},
// 		onSuccess: () => {
// 			queryClient.invalidateQueries({ queryKey: ["todos"] });
// 		},
// 		onError: (error: any) => {
// 			alert(error.message);
// 		},
// 	});

// 	return (
// 		<form onSubmit={createTodo}>
// 			<Flex gap={2}>
// 				<Input
// 					type='text'
// 					value={newTodo}
// 					onChange={(e) => setNewTodo(e.target.value)}
// 					ref={(input) => input && input.focus()}
// 				/>
// 				<Button
// 					mx={2}
// 					type='submit'
// 					_active={{
// 						transform: "scale(.97)",
// 					}}
// 				>
// 					{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
// 				</Button>
// 			</Flex>
// 		</form>
// 	);
// };
// export default TodoForm;

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";

const TodoForm = () => {
	const [newTodo, setNewTodo] = useState("");
	const [isPending, setIsPending] = useState(false);

	const createTodo = async (e: React.FormEvent) => {
		e.preventDefault();
		alert("Todo added!");
	};

	return (
		<div className="text-center">
			<form onSubmit={createTodo}>
				<div className="flex gap-2">
					<input
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						className="flex-1 p-2 border border-gray-300 rounded-lg ring-2 ring-blue-500 focus:outline-none focus:border-blue-500"
						autoFocus
					/>
					<button
						type="submit"
						className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-transform"
					>
						{isPending ? (
							<ImSpinner8 className="animate-spin" />
						) : (
							<IoMdAdd size={20} />
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;