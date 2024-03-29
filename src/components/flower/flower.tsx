import {
  component$,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./flower.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    count: 0,
    number: 20,
  });

  useVisibleTask$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class="container container-center">
      <div
        style={{
          "--state": `${state.count * 0.1}`,
        }}
        class={{
          host: true,
        }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{
              square: true,
              odd: i % 2 === 0,
            }}
            style={{ "--index": `${i + 1}` }}
          />
        )).reverse()}
      </div>
      <input
        class="input"
        type="range"
        value={state.number}
        max={40}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
    </div>
  );
});
