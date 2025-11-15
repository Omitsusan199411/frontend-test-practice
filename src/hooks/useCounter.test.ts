import { render, screen, renderHook, act } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
	test("should render the initial count", () => {
		// renderHookの返り値はResult型
		const { result } = renderHook(useCounter) // renderHookは擬似的にReactコンポーネント内からカスタムhooksを呼び出すことにしている。（react hooksの呼び出しルールに従う必要があるため。※ react hooksはReactコンポーネントのトップレベルでしか呼び出せないため）
		expect(result.current.count).toBe(0);
	})

	test("Initail Count test", () => {
		const { result } = renderHook(useCounter, {
			initialProps: {
				initialCount: 10 // renderHook内にセットしたカスタムhooksに初期引数を渡す
			}
		});
		expect(result.current.count).toBe(10);
	})

	test("Increment the count", () => {
		const { result } = renderHook(useCounter, {
			initialProps: {
				initialCount: 10
			}
		});
		// 状態（state）を更新する操作を行うテストの際は、act関数でラップして、Reactのレンダリングサイクルと同期させるためのラッパー関数
		act(() => result.current.increment()); // incrementを呼び出す。countが1増える。実際のDOMでは非同期的に再レンダリングを行うことから、act関数でラップしてあげる必要がある。
		expect(result.current.count).toBe(11); // 再レンダリングすることを考えて、カウントの値をテストする必要がある
	})

	test("Decrement the count", () => {
		const { result } = renderHook(useCounter, {
			initialProps: {
				initialCount: 10
			}
		})
		act(() => result.current.decrement()); // decrementを呼び出す。countが1減る。stateが変わるので再レンダリングされる
		expect(result.current.count).toBe(9);
	})
})
