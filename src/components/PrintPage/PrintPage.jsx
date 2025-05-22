
import LogoUA from "../../assets/UA.png";
import { Document, Page, StyleSheet, View, Text, Image } from '@react-pdf/renderer'
import printLogoUA from "../../assets/UA.png";
import dayjs from 'dayjs';
// import 'dayjs/locale/es.js';

import Divider from '@mui/material/Divider';
// import { display } from "html2canvas/dist/types/css/property-descriptors/display";

dayjs.locale('es');


const PrintPage = ({ data }) => {

    const styles = StyleSheet.create({
        page: {
            paddingTop: 80,
            paddingBottom: 40,
            paddingHorizontal: 40,
            color: '#666666',
        },
        header: {
            position: 'absolute',
            top: 20,
            left: 40,
            right: 40,
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            flexDirection: 'row',
            // justifyContent: 'space-between'
        },
        // headerLeft: {
        //     textAlign: 'left',
        // },
        // headerCenter: {
        //     textAlign: 'center',
        // },
        // headerRight: {
        //     textAlign: 'right',
        // },
        content: {
            marginTop: 1,
            fontSize: 12,
            textAlign: 'justify'
        },
        // // Tabla
        table: {
            display: 'table',
            width: 'auto',
            marginVertical: 10,
            // borderWidth: 1,
            borderColor: '#000'
        },
        tableRow: {
            flexDirection: 'row',
        },
        // tableColCourse: {
        //     // borderStyle: 'solid',
        //     // borderColor: '#000',
        //     // borderWidth: 1,
        //     padding: 4,
        //     flex: 2
        // },
        // tableCol: {
        //     // borderStyle: 'solid',
        //     // borderColor: '#000',
        //     // borderWidth: 1,
        //     padding: 4,
        //     flex: 1
        // },
        // tableHeader: {
        //     fontWeight: 'bold',
        //     backgroundColor: '#eee'
        // },
        // title: {
        //     fontSize: "4mm",
        //     fontWeight: 'bold',
        //     marginTop: "10px",
        //     marginBottom: "3px",
        //     color: '#000',
        // },
        description: {
            fontWeight: 'bold',
            fontSize: "4mm",
        },
        cell: {
            borderRightStyle: 'solid',
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 4,
            margin: 0,
        },
        cellDown: {
            borderRightStyle: 'solid',
            borderBottomStyle: 'solid',
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 4,
        },
        rowTitle: {
            height: "20px",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(206, 206, 206)",
            textAlign: "center",
            color: "#000",
            margin: 0,

        }

    });

    return (
        <Document>
            {[1].map((_, index) => (
                <Page key={index} style={styles.page}>
                    {/* Encabezado con numeración */}
                    <View style={{ ...styles.header, borderStyle: "solid", borderWidth: 1, borderColor: "#000", display: "flex", flexDirection: "row" }} fixed>
                        <View style={{ borderRightStyle: "solid", borderRightWidth: 1, borderRightColor: "#000", display: "flex", width: "20%", height: "50px", justifyContent: "center", alignItems: "center" }}>
                            <Image src={LogoUA} alt="" style={{ height: "38px", width: "40px" }} />
                            <Text style={{ fontSize: "5px", textAlign: "center" }}>UNIVERSIDAD DE LA</Text>
                            <Text style={{ fontSize: "5px", textAlign: "center" }}>AMAZONIA</Text>
                        </View>
                        <View style={{ width: "80%", display: "flex", flexDirection: "column", height: "50px" }}>
                            {/* <View style={{ borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#000", width: "100%", height: "50%", display: "flex", alignContent: "center" }}> */}
                            <View style={{ borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#000", width: "100%", height: "50%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                                {/* <Text style={{ fontSize: "2px", textAlign: "center" }}> </Text> */}
                                <Text style={{ fontSize: "9px", textAlign: "center" }}>FORMATO INFORME DE LABOR ACADÉMICA</Text>
                                {/* <Text style={{ fontSize: "2px", textAlign: "center" }}> </Text> */}
                            </View>
                            <View style={{ width: "100%", height: "50%", display: "flex", flexDirection: "row" }}>
                                <View style={{ borderRightStyle: "solid", borderRightWidth: 1, borderRightColor: "#000", width: "25%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>CÓDIGO:</Text>
                                    <Text style={{ fontSize: "8px", textAlign: "center" }}>FO-M-DC-06-01</Text>
                                </View>
                                <View style={{ borderRightStyle: "solid", borderRightWidth: 1, borderRightColor: "#000", width: "25%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>VERSIÓN:</Text>
                                    <Text style={{ fontSize: "8px", textAlign: "center" }}>3</Text>
                                </View>
                                <View style={{ borderRightStyle: "solid", borderRightWidth: 1, borderRightColor: "#000", width: "25%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>FECHA:</Text>
                                    <Text style={{ fontSize: "8px", textAlign: "center" }}>17-06-2024</Text>
                                </View>
                                <View style={{ width: "25%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>PÁGINA:</Text>
                                    <Text
                                        style={{ ...styles.headerRight, fontSize: "8px", fontWeight: "bold", textAlign: "center" }}
                                        render={({ pageNumber, totalPages }) =>
                                            `${pageNumber} de ${totalPages}`
                                        }
                                    />

                                </View>
                            </View>
                        </View>
                    </View>

                    {/* ---------------- INFORMACIÓN GENERAL ---------------- */}
                    <View style={styles.content}>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text>INFORME DE LABOR ACADÉMICA</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cell, width: "40%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Fecha: <Text style={{ fontWeight: 100, textAlign: "center" }}>{data.fecha}</Text></Text>
                                </View>
                                <View style={{ ...styles.cell, width: "60%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Semestre Académico: <Text style={{ fontWeight: 100, textAlign: "center" }}>{data.semestre}</Text></Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cellDown, width: "60%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Docente: <Text style={{ fontWeight: 100, textAlign: "center" }}>{data.docente}</Text></Text>
                                </View>
                                <View style={{ ...styles.cellDown, width: "40%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>No. Identificación: <Text style={{ fontWeight: 100, textAlign: "center" }}>{data.identificacion}</Text></Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cellDown, width: "30%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Tipo de Vinculación:</Text>
                                </View>
                                <View style={{ ...styles.cellDown, width: "70%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>{data.tipoVinculacion == "Carrera" ? "Carrera: __X__" : "Carrera: _____"}   {data.tipoVinculacion == "Ocasional" ? "Ocasional: __X__" : "Ocasional: _____"}   {data.tipoVinculacion == "Catedrático" ? "Catedrático: __X__" : "Catedrático: _____"} </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cellDown, width: "30%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Dedicación:</Text>
                                </View>
                                <View style={{ ...styles.cellDown, width: "70%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>{data.dedicacion == "Tiempo Completo" ? "Tiempo Completo: __X__" : "Tiempo Completo: _____"}   {data.dedicacion == "Medio Tiempo" ? "Medio Tiempo: __X__" : "Medio Tiempo: _____"}</Text>
                                </View>
                            </View>
                        </View>
                        {/* ---------------- DOCENCIA ---------------- */}
                        <View>
                            {data ? (
                                data.cursos.map((curso, index) => (
                                    <View key={index} style={styles.table}>
                                        <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                            <Text>DOCENCIA: Adjuntar este apartado, según el número de cursos orientados.</Text>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cell, width: "70%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>NOMBRE DEL CURSO: <Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_nombre}</Text></Text>
                                            </View>
                                            <View style={{ ...styles.cell, width: "30%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>CÓDIGO: <Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_codigo}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "15px" }}>1. Señale los desempeños y aspectos de mejoramiento con relación al desarrollo de las competencias planteadas en el microcurrículo:</Text>
                                                <Text style={{ ...styles.description, padding: "5px" }}>1.1. Desempeños logrados desde las competencias específicas:</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_desempenios}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "5px" }}>1.2. Aspectos de mejoramiento:</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_mejoramiento}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>2. Señale brevemente las estrategias desarrolladas según los referentes pedagógicos planteados en el Proyecto Educativo del Programa (PEP):</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_estrategias}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>3. Describa los Resultados de Aprendizaje logrados y sus evidencias:</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_resultados}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>4. Describa las estrategias de evaluación implementadas para valorar los resultados aprendizaje:</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_evaluacion}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>5. Establezca un comparativo - si aplica, según el curso - entre lo programado versus lo ejecutado con relación a las Prácticas Pedagógicas: </Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_comparativo}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>6. Indique qué estrategias utilizó para la asesoría y acompañamiento de los estudiantes y los efectos alcanzados: </Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_asesoria}</Text>
                                                <Text>{'\n'}</Text>
                                                <Text style={{ ...styles.description, padding: "15px" }}>7. Resultados académicos de los estudiantes:</Text>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ ...styles.description, padding: "5px" }}>No. Estudiantes: __<Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_matriculados}</Text>__</Text>
                                                    <Text style={{ ...styles.description, padding: "5px" }}>Aprobaron: __<Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_aprobaron}</Text>__</Text>
                                                    <Text style={{ ...styles.description, padding: "5px" }}>Habilitaron: __<Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_habilitaron}</Text>__</Text>
                                                    <Text style={{ ...styles.description, padding: "5px" }}>Perdieron: __<Text style={{ fontWeight: 100, textAlign: "center" }}>{curso.cur_perdieron}</Text>__</Text>
                                                </View>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Comentarios: </Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{curso.cur_comentarios}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text>No hay cursos disponibles.</Text>
                            )}
                        </View>
                        {/* ---------------- INVESTIGACIÓN ---------------- */}
                        <View>
                            {data ? (
                                data.investigacion.map((investigacion, index) => (
                                    <View key={index} style={styles.table}>
                                        <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                            <Text>INVESTIGACIÓN</Text>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cell, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Nombre del Proyecto: <Text style={{ fontWeight: 100, textAlign: "center" }}>{investigacion.inv_nombre}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Línea de investigación: <Text style={{ fontWeight: 100, textAlign: "center" }}>{investigacion.inv_linea}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "30%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Fecha de inicio:{'\n'} <Text style={{ fontWeight: 100, textAlign: "center" }}>{investigacion.inv_fechaInicio}</Text></Text>
                                            </View>
                                            <View style={{ ...styles.cellDown, width: "30%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Fecha de terminación:{'\n'} <Text style={{ fontWeight: 100, textAlign: "center" }}>{investigacion.inv_fechaFin}</Text></Text>
                                            </View>
                                            <View style={{ ...styles.cellDown, width: "40%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Horas de dedicación semanal:{'\n'} <Text style={{ fontWeight: 100, textAlign: "center" }}>{investigacion.inv_horasSemanales}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "15px" }}>Anexar el concepto de evaluación emitido por el Comité de Investigaciones sobre su informe de investigación.</Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{investigacion.inv_conceptoComite}</Text>
                                            </View>
                                        </View>


                                    </View>
                                ))
                            ) : (
                                <Text>No hay investigaciones disponibles.</Text>
                            )}
                        </View>
                        {/* ---------------- PROYECCIÓN SOCIAL ---------------- */}
                        <View>
                            {data ? (
                                data.proyeccionSocial.map((proyeccion, index) => (
                                    <View key={index} style={styles.table}>
                                        <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                            <Text>PROYECCIÓN SOCIAL</Text>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cell, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Nombre de la actividad: <Text style={{ fontWeight: 100, textAlign: "center" }}>{proyeccion.pro_nombre}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Horas de dedicación semanal: <Text style={{ fontWeight: 100, textAlign: "center" }}>{proyeccion.pro_horasSemanales}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Describa las actividades desarrolladas con sus respectivos soportes según el plan de acción. </Text>
                                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{proyeccion.pro_actividades[0].act_actividad}</Text>
                                            </View>
                                        </View>


                                    </View>
                                ))
                            ) : (
                                <Text>No hay ejercicios de Proyección Social disponibles.</Text>
                            )}
                        </View>
                        {/* ---------------- OPCIONES DE GRADO ---------------- */}
                        <View>
                            {data ? (
                                data.opcionesGrado.map((opcionGrado, index) => (
                                    <View key={index} style={styles.table}>
                                        <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                            <Text>OPCIONES DE GRADO/TRABAJOS DE GRADO</Text>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cell, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Opción de grado: <Text style={{ fontWeight: 100, textAlign: "center" }}>{opcionGrado.opc_tipo}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Nombre del proyecto: <Text style={{ fontWeight: 100, textAlign: "center" }}>{opcionGrado.opc_nombre}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <Text style={{ ...styles.description, padding: "5px" }}>Horas de dedicación semanal: <Text style={{ fontWeight: 100, textAlign: "center" }}>{opcionGrado.opc_horasSemanales}</Text></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableRow}>
                                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ fontWeight: 100, textAlign: "justify" }}><Text style={{ ...styles.description, padding: "5px" }}>Asesoría: </Text>Describa los avances en el proceso de dirección de acuerdo con el cronograma de trabajo establecido.</Text>
                                                </View>
                                                <Text style={{ fontWeight: 100, textAlign: "justify", marginTop: "10px" }}>{opcionGrado.opc_avances}</Text>
                                                <Text style={{ ...styles.description, padding: "5px", marginTop: "10px" }}>ESTADO: Porcentaje de ejecución: ___<Text style={{ fontWeight: 100, textAlign: "center" }}>{opcionGrado.opc_porcentajeAvances + "%"}</Text>___</Text>
                                                <Text style={{ ...styles.description, padding: "5px" }}>{opcionGrado.opc_estado == "Aprobado" ? "Aprobado: __X__" : "Aprobado: _____"}   {opcionGrado.opc_estado == "No aprobado" ? "No aprobado: __X__" : "No aprobado: _____"}   {opcionGrado.opc_estado == "Con modificaciones" ? "Con modificaciones: __X__" : "Con modificaciones: _____"} </Text>
                                            </View>
                                        </View>


                                    </View>
                                ))
                            ) : (
                                <Text>No hay investigaciones disponibles.</Text>
                            )}
                        </View>
                        {/* ---------------- OTRAS ACTIVIDADES DESARROLLADAS ---------------- */}
                        <View style={styles.table}>
                            <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                <Text>OTRAS ACTIVIDADES DESARROLLADAS (Tutorías, Asesorías, Participación en eventos, Acreditación, Pruebas Saber Pro, etc.)</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cellDown, width: "100%" }}>
                                    <Text style={{ ...styles.description, padding: "5px" }}>Logros Alcanzados</Text>
                                    <Text style={{ fontWeight: 100, textAlign: "justify" }}>{data.logros}</Text>
                                </View>
                            </View>
                            <View style={{ ...styles.cellDown, width: "100%" }}>
                                <Text style={{ ...styles.description, padding: "5px" }}>Dificultades encontradas y manera de superarlas: </Text>
                                <Text style={{ fontWeight: 100, textAlign: "justify" }}>{data.dificultades}</Text>
                            </View>
                        </View>
                        <View style={styles.table}>
                            <View style={{ ...styles.rowTitle, justifyContent: "start", paddingHorizontal: "10px" }}>
                                <Text>SUGERENCIAS DE ACTUALIZACIÓN BIBLIOGRAFICA</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.cellDown, width: "100%" }}>
                                    <Text style={{ fontWeight: 100, textAlign: "justify" }}>{data.bibliografia}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.tableRow, marginTop: "20px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ ...styles.cell, width: "60%", height: "100px" }}>
                            </View>
                            <View style={{ ...styles.cell, width: "60%" }}>
                                <Text style={{ fontWeight: 100, textAlign: "center", fontSize: "5mm" }}>Firma del Docente</Text>
                            </View>
                            <View style={{ ...styles.cell, width: "60%" }}>
                                <Text style={{ ...styles.description, padding: "5px" }}>Nombre: <Text style={{ fontWeight: 100, textAlign: "center" }}>{data.docente}</Text></Text>
                            </View>
                        </View>
                    </View>
                </Page>
            ))}
        </Document>
    )

}

export default PrintPage