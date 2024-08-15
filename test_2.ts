import {foo} './test.ts'

function isAFoo(v: any) {
	return v === foo;
}

function mean(values: number[]) {
	return values.length === 1;
}
